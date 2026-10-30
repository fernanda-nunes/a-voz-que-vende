interface OverlayProps {
  children: React.ReactNode;
  title: string;
  subtitle: string;
  className?: string;
}

export const Overlay = ({ children, title, subtitle, className }: OverlayProps) => {
  return (
    <div
      className={`absolute w-full flex items-center text-center font-extralight
        md:items-start md:text-left ${className ?? ""}`}
    >
      <div className="flex flex-col items-center text-white w-full">

        {/* Título menor no mobile (ex: text-2xl) e maior a partir de tablets/desktop (md:text-5xl) */}
        <h1 className="m-0 text-3xl md:text-3xl leading-none tracking-wider">
          {title}
        </h1>

        {/* Subtítulo menor no mobile (ex: text-sm) e maior no desktop (md:text-xl) */}
        <h4 className="m-0 mt-2 text-base md:text-xl leading-none tracking-widest">
          {subtitle}
        </h4> 
       
        <div className="mt-3 flex">
          {children}
        </div>

      </div>
    </div>
  );
};