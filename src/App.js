import React from "react";
import tw, { theme } from "twin.macro";
import { Logo, ContentSection, Button } from "./components";

const styles = {
  // Move long tw sets out of jsx to keep it scannable
  container: ({ hasBackground }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-r from-sky to-gray-200`,
  ],
};

const Input = tw.input`border p-3 rounded-md hover:border-gray-900`;
const App = () => (
  <div css={styles.container({ hasBackground: true })}>
    <ContentSection>
      <Input placeholder="name" />
      <Input placeholder="email" />
      <Input />
      <Button>Sign in</Button>

      <ul tw="list-disc space-y-2">
        <li tw="flex items-start">
          <span tw="h-6 flex items-center sm:h-7">
            <svg
              tw="flex-shrink-0 h-5 w-5 text-cyan"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <p tw="ml-2">
            Customizing your
            <code tw="text-sm font-bold text-gray-900">
              {` tailwind.config.js`}
            </code>{" "}
            file
          </p>
        </li>
        <li tw="flex items-start">
          <span tw="h-6 flex items-center sm:h-7">
            <svg
              tw="flex-shrink-0 h-5 w-5 text-cyan"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <p tw="ml-2">
            Extracting classes with
            <code tw="text-sm font-bold text-gray-900">@apply</code>
          </p>
        </li>
        <li tw="flex items-start">
          <span tw="h-6 flex items-center sm:h-7">
            <svg
              tw="flex-shrink-0 h-5 w-5 text-cyan"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clip-rule="evenodd"
              />
            </svg>
          </span>
          <p tw="ml-2">Code completion with instant preview</p>
        </li>
      </ul>
    </ContentSection>
    <Logo />
  </div>
);

export default App;
