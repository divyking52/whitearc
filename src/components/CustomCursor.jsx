import React, { useEffect, useState } from 'react';

export default function CustomCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [cursorType, setCursorType] = useState('default');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(pointer: fine)');
    if (!mediaQuery.matches) return;

    const onMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
      if (!isVisible) setIsVisible(true);

      const target = e.target;
      const clickable = target.closest('a, button, [role="button"], input, select, textarea');
      const viewable = target.closest('[data-cursor="view"]');

      if (viewable) {
        setCursorType('view');
      } else if (clickable) {
        setCursorType('hover');
      } else {
        setCursorType('default');
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    window.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    return () => {
      window.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
    };
  }, [isVisible]);

  if (!isVisible) return null;

  return (
    <div className="hidden md:block pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {/* Precision center dot in Bridge Rust */}
      <div
        className="fixed top-0 left-0 w-1.5 h-1.5 bg-[#BA4332] rounded-full pointer-events-none transition-transform duration-75 ease-out -translate-x-1/2 -translate-y-1/2"
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      />

      {/* Outer reticle / expanding ring */}
      <div
        className={`fixed top-0 left-0 rounded-full pointer-events-none transition-all duration-300 ease-out -translate-x-1/2 -translate-y-1/2 flex items-center justify-center ${
          cursorType === 'hover'
            ? 'w-10 h-10 border border-[#BA4332] bg-[#BA4332]/10'
            : cursorType === 'view'
            ? 'w-20 h-20 border border-[#BA4332] bg-[#FAF5EE]/95 shadow-md backdrop-blur-sm'
            : 'w-7 h-7 border border-[#D99480]'
        }`}
        style={{
          transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
        }}
      >
        {cursorType === 'view' && (
          <span className="text-[9px] font-mono tracking-widest text-[#BA4332] font-semibold flex items-center gap-1">
            VIEW <span className="text-xs">↗</span>
          </span>
        )}
      </div>
    </div>
  );
}
