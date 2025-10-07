import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { getImageUrl } from '@/lib/images';
import type { Components } from 'react-markdown';

interface MarkdownRendererProps {
  children: string;
  className?: string;
}

/**
 * Custom Markdown renderer that automatically handles image paths
 * for both local and external images
 */
const MarkdownRenderer = ({ children, className }: MarkdownRendererProps) => {
  // Custom components to handle images
  const components: Components = {
    img: ({ src, alt, ...props }) => {
      // Process the image source through our utility
      const processedSrc = src ? getImageUrl(src) : '';
      
      return (
        <img 
          src={processedSrc} 
          alt={alt || ''} 
          {...props}
          loading="lazy"
        />
      );
    }
  };

  return (
    <div className={className}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        components={components}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
