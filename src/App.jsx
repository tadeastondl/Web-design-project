import React, { useState, useRef } from "react";
import "./App.css";
import BasicCard from "./Components/Card";
import Layout from "./Components/Layout";
import { ThemeProvider, createTheme } from "@mui/material";
function App() {
  const theme = createTheme({
    typography: {
      fontFamily: ["Quicksand", "sans-serif"].join(","),
    },
  });

  const aboutUsRef = useRef(null);
  const contactRef = useRef(null);
  const pricesRef = useRef(null);
  const careerRef = useRef(null);

  return (
    <>
      <ThemeProvider theme={theme}>
        <Layout ref={[aboutUsRef, contactRef, pricesRef, careerRef]}>
          <div className="cardContainer">
            <BasicCard
              ref={aboutUsRef}
              style={{ marginTop: "8em" }}
              className="card1"
              title="O nás"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsum pariatur officia impedit tempore odio in molestiae tempora harum inventore. Et nam similique expedita iusto minus non tempora nobis unde?"
            />
            <BasicCard
              ref={contactRef}
              style={{ alignSelf: "flex-end" }}
              className="card2"
              title="Kontakty"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsum pariatur officia impedit tempore odio in molestiae tempora harum inventore. Et nam similique expedita iusto minus non tempora nobis unde?"
            />
            <BasicCard
              ref={pricesRef}
              style={{}}
              className="card3"
              title="Ceník"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsum pariatur officia impedit tempore odio in molestiae tempora harum inventore. Et nam similique expedita iusto minus non tempora nobis unde?"
            />
            <BasicCard
              ref={careerRef}
              style={{ marginBottom: "8em", alignSelf: "flex-end" }}
              className="card4"
              title="Kariéra"
              text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis ipsum pariatur officia impedit tempore odio in molestiae tempora harum inventore. Et nam similique expedita iusto minus non tempora nobis unde?"
            />
          </div>
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default App;
