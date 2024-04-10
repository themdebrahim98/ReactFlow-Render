import { memo } from "react";
import { Handle, Position, NodeToolbar, useNodes } from "reactflow";
import { IoMdClose } from "react-icons/io";

const CustomNode = ({ data, id }) => {
  return (
    <div className="text-updater-node">
      <NodeToolbar
        align="end"
        isVisible={data.toolbarVisible}
        position={data.toolbarPosition}
        offset={1}
      >
        <div
          style={{
            background: "red",
            borderRadius: "100%",
            width: "20px",
            height: "20px",
            cursor: "pointer",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            cursor: "pointer",
          }}
          onClick={() => data.deleteNodeById(id)}
        >
          <IoMdClose />
        </div>
      </NodeToolbar>
      <div>
        {/* <label htmlFor="text">Text:</label> */}
        <input
          id="text"
          name="text"
          onChange={() => {}}
          className="nodrag"
          style={{ textAlign: "center" }}
        />
      </div>
      {/* <div style={{ padding: "10px 20px" }}>{data.label}</div> */}
      <Handle type="target" position={Position.Top} />
      <Handle type="source" position={Position.Bottom} />
    </div>
  );
};

export default memo(CustomNode);
