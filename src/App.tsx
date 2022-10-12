import React, { useState } from "react";
import {
  addEdge,
  applyEdgeChanges,
  applyNodeChanges,
  Background,
  Connection,
  Controls,
  Edge,
  EdgeChange,
  Node,
  NodeChange,
  ReactFlow,
} from "reactflow";
import "reactflow/dist/style.css";

const initialNodes: Node[] = [
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

const initialEdges: Edge[] = [
  {
    id: "1-2",
    source: "1",
    target: "2",
    label: "to the",
    type: "step",
  },
];

function App() {
  const [nodes, setNodes] = useState<Node[]>(initialNodes);
  const [edges, setEdges] = useState<Edge[]>(initialEdges);

  const onNodesChange = (changes: NodeChange[]) => {
    setNodes((nds) => applyNodeChanges(changes, nds));
  };
  const onEdgesChange = (changes: EdgeChange[]) => {
    setEdges((eds) => applyEdgeChanges(changes, eds));
  };
  const onConnect = (connection: Connection) => {
    setEdges((eds) => addEdge(connection, eds));
  };

  return (
    <div style={{ height: "100vh" }}>
      <ReactFlow
        // フローエディタに表示して制御するノードを渡す
        nodes={nodes}
        // フローエディタにあるノード間をつなぐ線を渡す
        edges={edges}
        // ノードを選択したりドラッグしたりすると呼ばれるコールバック関数を渡す
        onNodesChange={onNodesChange}
        // ノード間の線を変更しようとすると呼ばれるコールバック関数を渡す
        onEdgesChange={onEdgesChange}
        // ノード間の線を追加しようとすると呼ばれるコールバック関数を渡す
        onConnect={onConnect}
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
