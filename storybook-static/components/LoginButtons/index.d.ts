import { JSX } from 'react/jsx-runtime';
type Props = {
    variant: "google" | "facebook" | "apple";
    onClick?: () => void;
};
export declare const LoginButtons: ({ variant, onClick }: Props) => JSX.Element;
export {};
