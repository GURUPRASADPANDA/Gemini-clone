// src/components/GeminiPage.jsx
const GeminiPage = ({ content }) => {
    const parseContent = (text) => {
      return text.split("\n").map((line, index) => {
        if (line.startsWith("# ")) return <h1 key={index}>{line.slice(2)}</h1>;
        if (line.startsWith("## ")) return <h2 key={index}>{line.slice(3)}</h2>;
        if (line.startsWith("* ")) return <li key={index}>{line.slice(2)}</li>;
        if (line.startsWith("=>")) {
          const [url, ...label] = line.slice(3).split(" ");
          return (
            <p key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {label.join(" ")}
              </a>
            </p>
          );
        }
        return <p key={index}>{line}</p>;
      });
    };
  
    return <div>{parseContent(content)}</div>;
  };
  
  export default GeminiPage;
  