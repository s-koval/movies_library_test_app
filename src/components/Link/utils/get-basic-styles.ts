import theme from "@core/theme";

const getBasicStyles = () => {
  return `
    text-decoration: none;
  
    cursor: pointer;
  
    outline: none;
  
    border-radius: ${theme.borderRadius.md};

    font-size: ${theme.font.size.body};
    font-weight: ${theme.font.weight.bold};
  `;
};

export default getBasicStyles;
