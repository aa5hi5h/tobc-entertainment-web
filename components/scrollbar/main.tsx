import { VelocityScroll } from "./velocity";


export function HorizontalScrollBar() {
  return (
    <VelocityScroll
      text="Tobc Entertainment"
      default_velocity={5}
      
      className="font-display overflow-hidden text-center text-4xl font-bold tracking-[-0.02em] text-rose-600 drop-shadow-sm dark:text-white md:text-7xl md:leading-[5rem]"
    />
  );
}