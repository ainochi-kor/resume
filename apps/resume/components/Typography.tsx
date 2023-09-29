import { forwardRef } from "react";
import type {
  ComponentPropsWithoutRef,
  ElementType,
  PropsWithChildren,
} from "react";

export type Combine<T, K> = T & Omit<K, keyof T>;

export type CombineElementProps<T extends ElementType, K = unknown> = Combine<
  K,
  ComponentPropsWithoutRef<T>
>;

type OverridableProps<T extends ElementType, K = unknown> = {
  as?: T;
  className?: string;
} & CombineElementProps<T, K>;

type TextProps<T extends ElementType> = PropsWithChildren<OverridableProps<T>>;

function TargetComponent<T extends ElementType = "span">(
  { children, as, className, ...props }: TextProps<T>,
  ref: React.Ref<never>
) {
  const target = as ?? "span";
  const Component = target;

  return (
    <Component className={className} ref={ref} {...props}>
      {children}
    </Component>
  );
}

export const Typography = forwardRef(TargetComponent) as typeof TargetComponent;
