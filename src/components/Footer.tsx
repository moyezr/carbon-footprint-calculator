"use client";

import { Chip } from "@nextui-org/react";
type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-screen flex items-center justify-center py-4">
      <Chip
        color="default"
        className="bg-white text-gray-400 mx-auto"
        variant="shadow"
      >
        Made by: Moyez Rabbani
      </Chip>
    </footer>
  );
};

export default Footer;
