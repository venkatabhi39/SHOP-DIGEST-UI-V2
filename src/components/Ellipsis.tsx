import classNames from 'classnames';
import { PropsWithChildren, useEffect, useRef, useState } from 'react';

export default function Ellipsis({
  maxLines = 2,
  children,
  style,
  ...props
}: PropsWithChildren<JSX.IntrinsicElements['div'] & { maxLines?: number }>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [totalLines, setTotalLines] = useState<number>(0);
  const [expanded, setExpanded] = useState(false);
  const [lineHeightPx, setLineHeightPx] = useState(0);
  const expandable = totalLines > maxLines;

  useEffect(() => {
    const calculateLines = () => {
      if (!containerRef.current) return;
      const lineHeight = parseFloat(
        window.getComputedStyle(containerRef.current).getPropertyValue('line-height'),
      );
      // const fontSize = parseFloat(
      //   window.getComputedStyle(containerRef.current).getPropertyValue('font-size'),
      // );

      const newLineHeightPx = lineHeight;

      setLineHeightPx(newLineHeightPx);
      setTotalLines(Math.ceil(containerRef.current!.scrollHeight / lineHeight));
    };

    window.addEventListener('resize', calculateLines);
    calculateLines();

    return () => {
      window.removeEventListener('resize', calculateLines);
    };
  }, []);

  return (
    <div className="relative">
      <div
        ref={containerRef}
        {...props}
        style={{
          ...(style || null),
          maxHeight: expandable && !expanded ? lineHeightPx * maxLines : undefined,
          overflowY: 'hidden',
        }}
      >
        {children}
      </div>

      {expandable && (
        <button
          type="button"
          onClick={() => setExpanded(!expanded)}
          className={classNames(
            'bg-white text-sdBlue hover:underline',
            !expanded && 'pl-2 absolute bottom-0 right-0',
          )}
        >
          {expanded ? 'less' : 'more'}
        </button>
      )}
    </div>
  );
}
