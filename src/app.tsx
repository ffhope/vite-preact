import { useState } from "preact/hooks";
import preactLogo from "./assets/preact.svg";
import viteLogo from "/vite.svg";
import "./app.css";
import { Button, Input, Select } from "letd";

export function App() {
  const [app, setApp] = useState("preact");
  return (
    <>
      <div
        style={{
          width: "100vw",
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        选择子应用: 
        <div
          style={{
            width: 160,
            marginLeft: 16,
          }}
        >
          <Select
            onChange={(e) => {
              console.log(e);
              setApp(e.target.value);
            }}
            options={[
              {
                label: "基座应用Preact",
                value: "preact",
              },
              {
                label: "子应用React",
                value: "react",
              },
              {
                label: "子应用Vue",
                value: "vue",
              },
              {
                label: "组件库",
                value: "letd",
              },
            ]}
          />
        </div>
      </div>


      <div
        style={{
          height: "80vh",
          width: "100vw",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
          justifyContent: "center",
          overflow: "hidden",
        }}
      >
        {app === "preact" && <PreactApp />}
        {app === "react" && <ReactApp />}
        {app === "vue" && <VueApp />}
        {app === "letd" && <LetApp />}
      </div>
    </>
  );
}

function PreactApp() {
  const [count, setCount] = useState(0);
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://preactjs.com" target="_blank">
          <img src={preactLogo} class="logo preact" alt="Preact logo" />
        </a>
      </div>
      <h1>Vite + Preact</h1>
      <div class="card">
        <Button type="primary" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </Button>
        <p></p>
        <Input value={count} />
      </div>
      <p class="read-the-docs">
        Click on the Vite and Preact logos to learn more
      </p>
    </>
  );
}

function ReactApp() {
  return (
    <iframe
      style={{
        width: "100%",
        height: "100vw",
      }}
      frameBorder={0}
      src="https://vite-react.fufanghao.com/"
    ></iframe>
  );
}

function VueApp() {
  return (
    <iframe
      style={{
        width: "100%",
        height: "100vw",
      }}
      frameBorder={0}
      src="https://vite-vue.fufanghao.com/"
    ></iframe>
  );
}

function LetApp() {
  return (
    <iframe
      style={{
        width: "100%",
        height: "100vw",
      }}
      frameBorder={0}
      src="https://lit.fufanghao.com/"
    ></iframe>
  );
}
