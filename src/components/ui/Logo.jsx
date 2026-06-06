import { cn } from '../../utils/cn';

const Logo = ({ className }) => {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      <div className="relative flex h-10 w-10 items-center justify-center rounded-xl bg-primary shadow-[0_0_20px_rgba(0,209,102,0.4)]">
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6 text-v-dark"
        >
          <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
          <polyline points="9 22 9 12 15 12 15 22" />
        </svg>
        <div className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-v-dark animate-pulse border-2 border-primary" />
      </div>
      <span className="text-2xl font-bold tracking-tight text-v-white">
        Vextor
      </span>
    </div>
  );
};

export { Logo };
