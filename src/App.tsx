import React from "react";
import { Background, Controls, Edge, Node, ReactFlow } from "reactflow";
import "reactflow/dist/style.css";

const nodes: Node[] = [
  {
    id: "1",
    data: { label: "Node 1" },
    position: { x: 0, y: 0 },
  },
  {
    id: "2",
    data: { label: "Node 2" },
    position: { x: 100, y: 100 },
  },
];

const edges: Edge[] = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    label: "to the",
    type: "step",
  },
];

function App() {
  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        // フローエディタに表示して制御するノードを渡す
        nodes={nodes}
        // フローエディタにあるノード間をつなぐ線を渡す
        edges={edges}
      >
        {/* フローエディターのドット方眼背景を表示するコンポーネント */}
        <Background />
        {/* フローエディターを拡大、縮小、サイズ調整、ロック制御などをしたりするコンポーネント */}
        <Controls />
      </ReactFlow>
    </div>
  );
}

export default App;
