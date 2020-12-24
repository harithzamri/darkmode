import React from "react";
import { Image, useColorMode } from "@chakra-ui/react";
import Link from "next/link";

function NavBar() {
  const { colorMode } = useColorMode();
  const isDark = colorMode === "dark";
  return (
    <div>
      {isDark ? (
        <Link href="/">
          <Image
            marginTop="3rem"
            src="https://greatech-group.com/images/logo-greatech-color.png"
            filter="brightness(1.5)"
            alt="greatech bright mode"
            width="180px"
          />
        </Link>
      ) : (
        <Link href="/">
          <Image
            marginTop="2rem"
            src="https://greatech-group.com/images/logo-greatech.png"
            alt="greatech dark mode"
            width="180px"
          />
        </Link>
      )}
    </div>
  );
}

export default NavBar;
