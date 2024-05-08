const buildConfig = () => {
  const blogId = process.env.NEXT_PUBLIC_BLOG_ID;
  if (!blogId) throw new Error("NEXT_PUBLIC_BLOG_ID is missing");
  return {
    blog: {
      name: "ZimDoc Health Tips",
      copyright: "zimdoc health tips",
      metadata: {
        title: {
          absolute: "Health tips from zimbabwe doctors",
          default: "Health tips from zimbabwe doctors",
          template: "%s - Health Tips From Zimbabwe Doctors",
        },
      },
    },
    wisp: {
      blogId,
    },
  };
};

export const config = buildConfig();
