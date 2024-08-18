import { GoogleLogo } from "../Icons";
import CaAppleIcon from "../Icons/CaAppleIcon";
import CaFacebookIcon from "../Icons/CaFacebookIcon";

type Props = {
  variant: "google" | "facebook" | "apple";
  onClick?: () => void;
};

export const LoginButtons = ({ variant, onClick }: Props) => {
  const logo =
    variant === "google" ? (
      <GoogleLogo />
    ) : variant === "facebook" ? (
      <CaFacebookIcon />
    ) : (
      <CaAppleIcon />
    );

  return (
    <button
      style={{
        boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
      }}
      className="w-full flex flex-row gap-6 items-center px-8 py-5 rounded-lg "
      onClick={onClick}
    >
      {logo}
      <span className="text-primary font-semibold">
        Continue with {variant}
      </span>
    </button>
  );
};
