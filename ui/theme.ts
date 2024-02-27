const commonTheme = {
  color: {
    accent: "#156ab7",
    text: "#fff",
  },
  backgroundInverseAlpha: 0.05,
};

export const whiteTheme = {
  ...commonTheme,
  color: {
    ...commonTheme.color,
    text: "#000",
    background: "#fff",
    backgroundInverseRGB: 0,
    textRGB: 0,
  },
  header: {
    background: "#fff",
    backgroundRGB: 255,
  },
  card:{
    background:"black",
    text:"#000000",
    shadow:"#000000"
  }
};

export const darkTheme = {
  ...commonTheme,
  color: {
    ...commonTheme.color,
    text: "#fff",
    background: "#000",
    backgroundInverseRGB: 255,
    textRGB: 255,
  },
  header: {
    background: "#000",
    backgroundRGB: 0,
  },
  
  card:{
    background: "#000000",
    text:"#CECECE",
    shadow:"#303030"
  }
};
