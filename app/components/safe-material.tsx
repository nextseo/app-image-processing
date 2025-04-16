//component/safe-meterial.tsx

'use client'

import {
  Button as MButton,
  Card as MCard,
  CardBody as MCardBody,
  Checkbox as MCheckbox,
  Input as MInput,
  Typography as MTypography,
  Select as MSelect ,
  Option as MOption
} from "@material-tailwind/react";

import type {
  ButtonProps,
  CardProps,
  CardBodyProps,
  CheckboxProps,
  InputProps,
  TypographyProps,
  SelectProps,
  SelectOptionProps
} from "@material-tailwind/react";

// สร้างคอมโพเนนต์ใหม่พร้อม autocomplete + ปิด error
export const Button = (props: ButtonProps) => <MButton {...(props as any)} />
export const Card = (props: CardProps) => <MCard {...(props as any)} />
export const CardBody = (props: CardBodyProps) => <MCardBody {...(props as any)} />
export const Input = (props: InputProps) => <MInput {...(props as any)} />
export const Checkbox = (props: CheckboxProps) => <MCheckbox {...(props as any)} />
export const Typography = (props: TypographyProps) => <MTypography {...(props as any)} />
export const Select = (props: SelectProps) => <MSelect {...(props as any)} />
export const Option = (props: SelectOptionProps) => <MOption {...(props as any)} />