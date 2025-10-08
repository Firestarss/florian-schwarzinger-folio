import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
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
  // Custom components to handle images and HTML elements
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
          className="markdown-image"
        />
      );
    },
    // Handle HTML div elements to support custom layouts
    div: ({ className: divClassName, ...props }) => {
      return <div className={divClassName} {...props} />;
    },
    // Remove paragraph wrapping for images inside layout containers
    p: ({ children, ...props }) => {
      // Check if this paragraph only contains an image
      const hasOnlyImage = children && typeof children === 'object' && 
        !Array.isArray(children) && 
        (children as any).type === 'img';
      
      if (hasOnlyImage) {
        return <>{children}</>;
      }
      
      return <p {...props}>{children}</p>;
    }
  };

  return (
    <div className={className}>
      <ReactMarkdown 
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw]}
        components={components}
      >
        {children}
      </ReactMarkdown>
    </div>
  );
};

export default MarkdownRenderer;
