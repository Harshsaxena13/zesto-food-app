import "react";

// Allow CSS custom properties (e.g. `--delay`) in inline `style` objects.
declare module "react" {
  interface CSSProperties {
    [customProperty: `--${string}`]: string | number;
  }
}
