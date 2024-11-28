import { type PluginUtils } from "tailwindcss/types/config";

export default function typographyStyles( { theme }: PluginUtils ) {
  return {
    DEFAULT: {
      css: {
        ":is(a, blockquote, thead th) strong": {
          color: "inherit",
        },
        ":is(a, h1, h2, h3, blockquote, thead th) code": {
          color: "inherit",
        },
        // Overrides
        ":is(h1, h2, h3) + *": {
          marginTop: "0",
        },
        ":is(h1, h2, h3) a": {
          fontWeight: "inherit",
        },
        ":is(ol, ul) > li": {
          paddingLeft: theme( "spacing[1.5]" ),
        },
        ":is(tbody, tfoot) td": {
          paddingBottom: theme( "spacing.2" ),
          paddingLeft: theme( "spacing.2" ),
          paddingRight: theme( "spacing.2" ),
          paddingTop: theme( "spacing.2" ),
        },
        ":is(tbody, tfoot) td:first-child": {
          paddingLeft: "0",
        },
        ":is(tbody, tfoot) td:last-child": {
          paddingRight: "0",
        },
        "> :first-child": {
          marginTop: "0 !important",
        },
        "> :last-child": {
          marginBottom: "0 !important",
        },
        "> ol > li > *:first-child": {
          marginTop: theme( "spacing.5" ),
        },
        "> ol > li > *:last-child": {
          marginBottom: theme( "spacing.5" ),
        },
        "> ul > li > *:first-child": {
          marginTop: theme( "spacing.5" ),
        },
        "> ul > li > *:last-child": {
          marginBottom: theme( "spacing.5" ),
        },
        "> ul > li p": {
          marginBottom: theme( "spacing.3" ),
          marginTop: theme( "spacing.3" ),
        },
        "[class~=\"lead\"]": {
          fontSize: theme( "fontSize.base" )[0],
          ...theme( "fontSize.base" )[1],
        },
        "--tw-prose-body": theme( "colors.zinc.700" ),

        "--tw-prose-bold": theme( "colors.zinc.900" ),
        "--tw-prose-bullets": theme( "colors.zinc.300" ),
        "--tw-prose-captions": theme( "colors.zinc.500" ),
        "--tw-prose-code": theme( "colors.zinc.900" ),
        "--tw-prose-code-bg": theme( "colors.zinc.100" ),
        "--tw-prose-code-ring": theme( "colors.zinc.300" ),
        "--tw-prose-counters": theme( "colors.zinc.500" ),
        "--tw-prose-headings": theme( "colors.zinc.900" ),
        "--tw-prose-hr": theme( "colors.zinc.900 / 0.05" ),
        "--tw-prose-invert-body": theme( "colors.zinc.400" ),
        "--tw-prose-invert-bold": theme( "colors.white" ),
        "--tw-prose-invert-bullets": theme( "colors.zinc.600" ),
        "--tw-prose-invert-captions": theme( "colors.zinc.400" ),
        "--tw-prose-invert-code": theme( "colors.white" ),
        "--tw-prose-invert-code-bg": theme( "colors.zinc.700 / 0.15" ),
        "--tw-prose-invert-code-ring": theme( "colors.white / 0.1" ),
        "--tw-prose-invert-counters": theme( "colors.zinc.400" ),

        "--tw-prose-invert-headings": theme( "colors.white" ),
        "--tw-prose-invert-hr": theme( "colors.white / 0.05" ),
        "--tw-prose-invert-links": theme( "colors.sky.400" ),

        "--tw-prose-invert-links-hover": theme( "colors.sky.500" ),
        "--tw-prose-invert-links-underline": theme( "colors.sky.500 / 0.3" ),

        "--tw-prose-invert-quote-borders": theme( "colors.zinc.700" ),
        "--tw-prose-invert-quotes": theme( "colors.zinc.100" ),
        "--tw-prose-invert-td-borders": theme( "colors.zinc.700" ),
        "--tw-prose-invert-th-borders": theme( "colors.zinc.600" ),
        "--tw-prose-links": theme( "colors.sky.500" ),
        "--tw-prose-links-hover": theme( "colors.sky.600" ),
        "--tw-prose-links-underline": theme( "colors.sky.500 / 0.3" ),
        "--tw-prose-quote-borders": theme( "colors.zinc.200" ),
        "--tw-prose-quotes": theme( "colors.zinc.900" ),
        "--tw-prose-td-borders": theme( "colors.zinc.200" ),
        "--tw-prose-th-borders": theme( "colors.zinc.300" ),
        // Inline elements
        a: {
          "&:hover": {
            color: "var(--tw-prose-links-hover)",
            textDecorationColor: "var(--tw-prose-links-underline)",
          },
          color: "var(--tw-prose-links)",
          fontWeight: "500",
          textDecoration: "underline transparent",
          transitionDuration: theme( "transitionDuration.DEFAULT" ),
          transitionProperty: "color, text-decoration-color",
          transitionTimingFunction: theme( "transitionTimingFunction.DEFAULT" ),
        },
        // Quotes
        blockquote: {
          borderLeftColor: "var(--tw-prose-quote-borders)",
          borderLeftWidth: "0.25rem",
          color: "var(--tw-prose-quotes)",
          fontStyle: "italic",
          fontWeight: "500",
          marginBottom: theme( "spacing.8" ),
          marginTop: theme( "spacing.8" ),
          paddingLeft: theme( "spacing.5" ),
          quotes: "\"\\201C\"\"\\201D\"\"\\2018\"\"\\2019\"",
        },
        "blockquote p:first-of-type::before": {
          content: "open-quote",
        },
        "blockquote p:last-of-type::after": {
          content: "close-quote",
        },
        code: {
          backgroundColor: "var(--tw-prose-code-bg)",
          borderRadius: theme( "borderRadius.lg" ),
          boxShadow: "inset 0 0 0 1px var(--tw-prose-code-ring)",
          color: "var(--tw-prose-code)",
          fontSize: theme( "fontSize.2xs" ),
          paddingBottom: theme( "padding.1" ),
          paddingLeft: theme( "padding[1.5]" ),
          paddingRight: theme( "padding[1.5]" ),
          paddingTop: theme( "padding.1" ),
        },
        // Base
        color: "var(--tw-prose-body)",
        figcaption: {
          color: "var(--tw-prose-captions)",
          fontSize: theme( "fontSize.xs" )[0],
          ...theme( "fontSize.xs" )[1],
          marginTop: theme( "spacing.2" ),
        },
        "figure > *": {
          marginBottom: "0",
          marginTop: "0",
        },
        fontSize: theme( "fontSize.sm" )[0],
        // Headings
        h1: {
          color: "var(--tw-prose-headings)",
          fontSize: theme( "fontSize.2xl" )[0],
          fontWeight: "700",
          ...theme( "fontSize.2xl" )[1],
          marginBottom: theme( "spacing.2" ),
        },

        h2: {
          color: "var(--tw-prose-headings)",
          fontSize: theme( "fontSize.lg" )[0],
          fontWeight: "600",
          ...theme( "fontSize.lg" )[1],
          marginBottom: theme( "spacing.2" ),
          marginTop: theme( "spacing.16" ),
        },

        "h2 code": {
          fontSize: theme( "fontSize.base" )[0],
          fontWeight: "inherit",
        },
        h3: {
          color: "var(--tw-prose-headings)",
          fontSize: theme( "fontSize.base" )[0],
          ...theme( "fontSize.base" )[1],
          fontWeight: "600",
          marginBottom: theme( "spacing.2" ),
          marginTop: theme( "spacing.10" ),
        },
        "h3 code": {
          fontSize: theme( "fontSize.sm" )[0],
          fontWeight: "inherit",
        },

        // Horizontal rules
        hr: {
          "@screen lg": {
            marginLeft: `calc(-1 * ${theme( "spacing.8" )})`,
            marginRight: `calc(-1 * ${theme( "spacing.8" )})`,
          },
          "@screen sm": {
            marginLeft: `calc(-1 * ${theme( "spacing.6" )})`,
            marginRight: `calc(-1 * ${theme( "spacing.6" )})`,
          },
          borderColor: "var(--tw-prose-hr)",
          borderTopWidth: 1,
          marginBottom: theme( "spacing.16" ),
          marginLeft: `calc(-1 * ${theme( "spacing.4" )})`,
          marginRight: `calc(-1 * ${theme( "spacing.4" )})`,
          marginTop: theme( "spacing.16" ),
          maxWidth: "none",
        },
        // Media
        "img, video, figure": {
          marginBottom: theme( "spacing.8" ),
          marginTop: theme( "spacing.8" ),
        },
        li: {
          marginBottom: theme( "spacing.2" ),
          marginTop: theme( "spacing.2" ),
        },

        lineHeight: theme( "lineHeight.7" ),
        // Lists
        ol: {
          listStyleType: "decimal",
          marginBottom: theme( "spacing.5" ),
          marginTop: theme( "spacing.5" ),
          paddingLeft: "1.625rem",
        },
        "ol > li::marker": {
          color: "var(--tw-prose-counters)",
          fontWeight: "400",
        },

        "ol[type=\"1\"]": {
          listStyleType: "decimal",
        },
        "ol[type=\"A\" s]": {
          listStyleType: "upper-alpha",
        },
        "ol[type=\"a\" s]": {
          listStyleType: "lower-alpha",
        },
        "ol[type=\"A\"]": {
          listStyleType: "upper-alpha",
        },
        "ol[type=\"a\"]": {
          listStyleType: "lower-alpha",
        },
        "ol[type=\"I\" s]": {
          listStyleType: "upper-roman",
        },
        "ol[type=\"i\" s]": {
          listStyleType: "lower-roman",
        },
        "ol[type=\"I\"]": {
          listStyleType: "upper-roman",
        },
        "ol[type=\"i\"]": {
          listStyleType: "lower-roman",
        },
        // Text
        p: {
          marginBottom: theme( "spacing.6" ),
          marginTop: theme( "spacing.6" ),
        },
        strong: {
          color: "var(--tw-prose-bold)",
          fontWeight: "600",
        },
        // Tables
        table: {
          lineHeight: theme( "lineHeight.6" ),
          marginBottom: theme( "spacing.8" ),
          marginTop: theme( "spacing.8" ),
          tableLayout: "auto",
          textAlign: "left",
          width: "100%",
        },
        "tbody td": {
          verticalAlign: "baseline",
        },

        "tbody tr": {
          borderBottomColor: "var(--tw-prose-td-borders)",
          borderBottomWidth: "1px",
        },
        "tbody tr:last-child": {
          borderBottomWidth: "0",
        },
        tfoot: {
          borderTopColor: "var(--tw-prose-th-borders)",
          borderTopWidth: "1px",
        },
        "tfoot td": {
          verticalAlign: "top",
        },
        thead: {
          borderBottomColor: "var(--tw-prose-th-borders)",
          borderBottomWidth: "1px",
        },
        "thead th": {
          color: "var(--tw-prose-headings)",
          fontWeight: "600",
          paddingBottom: theme( "spacing.2" ),
          paddingLeft: theme( "spacing.2" ),
          paddingRight: theme( "spacing.2" ),
          verticalAlign: "bottom",
        },
        "thead th:first-child": {
          paddingLeft: "0",
        },
        "thead th:last-child": {
          paddingRight: "0",
        },

        ul: {
          listStyleType: "disc",
          marginBottom: theme( "spacing.5" ),
          marginTop: theme( "spacing.5" ),
          paddingLeft: "1.625rem",
        },
        "ul > li::marker": {
          color: "var(--tw-prose-bullets)",
        },
        "ul ul, ul ol, ol ul, ol ol": {
          marginBottom: theme( "spacing.3" ),
          marginTop: theme( "spacing.3" ),
        },
      },
    },
    invert: {
      css: {
        "--tw-prose-body": "var(--tw-prose-invert-body)",
        "--tw-prose-bold": "var(--tw-prose-invert-bold)",
        "--tw-prose-bullets": "var(--tw-prose-invert-bullets)",
        "--tw-prose-captions": "var(--tw-prose-invert-captions)",
        "--tw-prose-code": "var(--tw-prose-invert-code)",
        "--tw-prose-code-bg": "var(--tw-prose-invert-code-bg)",
        "--tw-prose-code-ring": "var(--tw-prose-invert-code-ring)",
        "--tw-prose-counters": "var(--tw-prose-invert-counters)",
        "--tw-prose-headings": "var(--tw-prose-invert-headings)",
        "--tw-prose-hr": "var(--tw-prose-invert-hr)",
        "--tw-prose-links": "var(--tw-prose-invert-links)",
        "--tw-prose-links-hover": "var(--tw-prose-invert-links-hover)",
        "--tw-prose-links-underline": "var(--tw-prose-invert-links-underline)",
        "--tw-prose-quote-borders": "var(--tw-prose-invert-quote-borders)",
        "--tw-prose-quotes": "var(--tw-prose-invert-quotes)",
        "--tw-prose-td-borders": "var(--tw-prose-invert-td-borders)",
        "--tw-prose-th-borders": "var(--tw-prose-invert-th-borders)",
      },
    },
  };
}
