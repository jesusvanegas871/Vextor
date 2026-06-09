import { cn } from '../../utils/cn';
import logoFull from '../../assets/brand/logo-full.png';
import isotipo from '../../assets/brand/isotipo.png';

const Logo = ({ className, variant = 'full', size = 'md' }) => {
  const sizes = {
    sm: variant === 'iso' ? 'h-8 w-8' : 'h-8',
    md: variant === 'iso' ? 'h-10 w-10' : 'h-10',
    lg: variant === 'iso' ? 'h-16 w-16' : 'h-16',
  };

  return (
    <div className={cn("flex items-center", className)}>
      {variant === 'full' ? (
        <img
          src={logoFull}
          alt="Vextor Logo"
          className={cn("object-contain", sizes[size])}
        />
      ) : (
        <img
          src={isotipo}
          alt="Vextor Isotipo"
          className={cn("object-contain", sizes[size])}
        />
      )}
    </div>
  );
};

export { Logo };
