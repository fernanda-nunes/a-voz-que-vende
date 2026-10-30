import { Copyright } from "../Copyright/index.tsx";
import { SocialLinks } from "../SocialLinks/index.tsx"; 
import { MenuItems } from "../MenuItems/index.tsx";

export const Footer = () => {
  return (
    <footer className="bg-footer-bg">
      <div className="container">
        <div className="flex flex-col lg:flex-row justify-between py-10 px-2 gap-2">
          <div className="flex flex-col gap-8 min-w-86">
            
            <SocialLinks />
          </div>

          <MenuItems />
        </div>
        <Copyright />
      </div>
    </footer>
  );
};
