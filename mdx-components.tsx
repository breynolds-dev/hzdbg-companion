import { Button } from "@/components/Button";
import {
  Code as code,
  CodeGroup,
  Pre as pre,
} from "@/components/Code";
import { Guides } from "@/components/Guides";
import { HeroPattern } from "@/components/HeroPattern";
import * as mdxComponents from "@/components/mdx";
import { Resources } from "@/components/Resources";
import { type MDXComponents } from "mdx/types";
import Link from "next/link";

export function useMDXComponents( components: MDXComponents ) {
  return {
    ...components,
    ...mdxComponents,
    a: Link,
    Button,
    code,
    CodeGroup,
    Guides,
    HeroPattern,
    pre,
    Resources,
  };
}
