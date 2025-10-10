import { FileText, FileImage, FileVideo, FileArchive, FileCode, File, Download } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface FileItem {
  name: string;
  url: string;
  size?: string;
  type?: string;
}

interface FileDownloadProps {
  files: FileItem[];
}

const getFileIcon = (filename: string, type?: string) => {
  const ext = filename.split('.').pop()?.toLowerCase();
  const iconClass = "text-primary";
  const iconSize = 24;

  // Check type first if provided
  if (type) {
    if (type.startsWith('image/')) return <FileImage className={iconClass} size={iconSize} />;
    if (type.startsWith('video/')) return <FileVideo className={iconClass} size={iconSize} />;
    if (type.includes('pdf')) return <FileText className={iconClass} size={iconSize} />;
  }

  // Check by extension
  switch (ext) {
    // Documents
    case 'pdf':
    case 'doc':
    case 'docx':
    case 'txt':
    case 'rtf':
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
    case 'avi':
    case 'mov':
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
      return <FileArchive className={iconClass} size={iconSize} />;
    
    // Code/CAD
    case 'js':
    case 'ts':
    case 'tsx':
    case 'jsx':
    case 'py':
    case 'java':
    case 'cpp':
    case 'c':
    case 'h':
    case 'css':
    case 'html':
    case 'json':
    case 'xml':
    case 'yaml':
    case 'sldprt':
    case 'sldasm':
    case 'slddrw':
    case 'stl':
    case 'step':
    case 'iges':
    case 'dwg':
    case 'dxf':
      return <FileCode className={iconClass} size={iconSize} />;
    
    default:
      return <File className={iconClass} size={iconSize} />;
  }
};

const FileDownload = ({ files }: FileDownloadProps) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {files.map((file, index) => (
        <Card key={index} className="p-4 hover:shadow-md transition-shadow">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-3 min-w-0 flex-1">
              <div className="flex-shrink-0">
                {getFileIcon(file.name, file.type)}
              </div>
              <div className="min-w-0 flex-1">
                <p className="font-medium truncate">{file.name}</p>
                {file.size && (
                  <p className="text-sm text-muted-foreground">{file.size}</p>
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
