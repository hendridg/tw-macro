import React from "react";
import tw from "twin.macro";

const Content = tw.div`flex flex-col p-8 space-y-6 mt-2.5 shadow-lg bg-white rounded-2xl self-center`;

const ContentSection = ({ children }) => <Content>{children}</Content>;

export default ContentSection;
