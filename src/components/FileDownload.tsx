import { FileText, FileImage, FileVideo, FileArchive, FileCode, File, Download, Box, Boxes, Layers, Cpu, Wrench, Printer, Database, Settings, FileJson, FileSpreadsheet, Binary } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

interface FileItem {
  name: string;
  url: string;
}

interface FileDownloadProps {
  files: FileItem[];
}

const getFileIcon = (filename: string) => {
  const ext = filename.split('.').pop()?.toLowerCase();
  const iconClass = "text-primary";
  const iconSize = 24;

  switch (ext) {
    // SolidWorks CAD files
    case 'sldprt':
      return <Box className={iconClass} size={iconSize} />;
    case 'sldasm':
      return <Boxes className={iconClass} size={iconSize} />;
    case 'slddrw':
      return <Layers className={iconClass} size={iconSize} />;
    
    // 3D CAD models
    case 'step':
    case 'stp':
    case 'igs':
    case 'iges':
    case 'f3d':
    case 'fcstd':
      return <Box className={iconClass} size={iconSize} />;
    
    // 3D printing & models
    case 'stl':
    case '3mf':
    case 'blend':
    case 'fbx':
    case 'obj':
      return <Printer className={iconClass} size={iconSize} />;
    
    // 2D CAD drawings
    case 'dxf':
    case 'dwg':
      return <Layers className={iconClass} size={iconSize} />;
    
    // PCB & Electronics
    case 'sch':
    case 'brd':
    case 'kicad_pcb':
    case 'gerber':
    case 'lbr':
      return <Cpu className={iconClass} size={iconSize} />;
    
    // ROS & Robotics
    case 'roslaunch':
    case 'urdf':
    case 'bag':
      return <Settings className={iconClass} size={iconSize} />;
    
    // Arduino & Embedded
    case 'ino':
      return <Cpu className={iconClass} size={iconSize} />;
    
    // Programming - Code files
    case 'py':
    case 'cpp':
    case 'c':
    case 'h':
    case 'js':
    case 'ts':
    case 'tsx':
    case 'jsx':
    case 'java':
    case 'sh':
    case 'bat':
      return <FileCode className={iconClass} size={iconSize} />;
    
    // Web files
    case 'html':
    case 'css':
      return <FileCode className={iconClass} size={iconSize} />;
    
    // Data & Config files
    case 'json':
      return <FileJson className={iconClass} size={iconSize} />;
    case 'xml':
    case 'yaml':
    case 'yml':
      return <Settings className={iconClass} size={iconSize} />;
    case 'csv':
    case 'xlsx':
    case 'xls':
      return <FileSpreadsheet className={iconClass} size={iconSize} />;
    case 'bom':
      return <Database className={iconClass} size={iconSize} />;
    
    // Documents
    case 'pdf':
    case 'doc':
    case 'docx':
    case 'pptx':
      return <FileText className={iconClass} size={iconSize} />;
    case 'md':
    case 'txt':
      return <FileText className={iconClass} size={iconSize} />;
    
    // Images
    case 'jpg':
    case 'jpeg':
    case 'png':
    case 'gif':
    case 'svg':
    case 'webp':
    case 'bmp':
      return <FileImage className={iconClass} size={iconSize} />;
    
    // Video
    case 'mp4':
    case 'mov':
    case 'avi':
    case 'wmv':
    case 'flv':
    case 'webm':
      return <FileVideo className={iconClass} size={iconSize} />;
    
    // Archives
    case 'zip':
    case 'rar':
    case '7z':
    case 'tar':
    case 'gz':
    case 'tgz':
      return <FileArchive className={iconClass} size={iconSize} />;
    
    // Executables
    case 'exe':
    case 'appimage':
    case 'deb':
      return <Binary className={iconClass} size={iconSize} />;
    
    default:
      return <File className={iconClass} size={iconSize} />;
  }
};

const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
};

const FileDownload = ({ files }: FileDownloadProps) => {
  const [fileSizes, setFileSizes] = useState<{ [key: string]: string }>({});

  useEffect(() => {
    const fetchFileSizes = async () => {
      const sizes: { [key: string]: string } = {};
      
      await Promise.all(
        files.map(async (file) => {
          try {
            const response = await fetch(file.url, { method: 'HEAD' });
            const contentLength = response.headers.get('content-length');
            if (contentLength) {
              sizes[file.name] = formatFileSize(parseInt(contentLength, 10));
            } else {
              // Fallback: fetch the full file to get size
              const fullResponse = await fetch(file.url);
              const blob = await fullResponse.blob();
              sizes[file.name] = formatFileSize(blob.size);
            }
          } catch (error) {
            console.error(`Failed to fetch size for ${file.name}:`, error);
            sizes[file.name] = 'Unknown size';
          }
        })
      );
      
      setFileSizes(sizes);
    };

    fetchFileSizes();
  }, [files]);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {files.map((file, index) => (
        <Card key={index} className="p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div className="flex-shrink-0">
                {getFileIcon(file.name)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium truncate">{file.name}</p>
                {fileSizes[file.name] && (
                  <p className="text-sm text-muted-foreground">{fileSizes[file.name]}</p>
                )}
              </div>
            </div>
            <Button
              size="sm"
              variant="ghost"
              asChild
              className="flex-shrink-0"
            >
              <a href={file.url} download={file.name}>
                <Download size={18} />
              </a>
            </Button>
          </div>
        </Card>
      ))}
    </div>
  );
};

export default FileDownload;
