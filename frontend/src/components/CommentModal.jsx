import React from "react";

const CommentModal = ({ open, onClose }) => {

    if (!open) return null;

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                background: "rgba(0,0,0,0.6)",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                zIndex: 9999
            }}
        >
            <div
                style={{
                    width: "400px",
                    background: "#fff",
                    padding: "20px",
                    borderRadius: "10px"
                }}
            >
                <h2>Comments</h2>

                <p>No comments yet.</p>

                <button onClick={onClose}>
                    Close
                </button>

            </div>
        </div>
    );
};

export default CommentModal;