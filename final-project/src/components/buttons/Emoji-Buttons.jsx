import { REACTIONS } from "../Emojis";
import addPostReaction from "../../routes/add-reactions";
import getPostReations from "../../routes/get-reactions";

  export default function EpicReactions({ postId }) {
  const { data = {} } = useSWR(
    () => postId && `/api/posts/${postId}/reactions`,
    fetcher
  );

  const addReaction = (event, name) => {
    mutate(
      (reactions) => ({ ...reactions, [name]: (reactions?.[name] || 0) + 1 }),
      false
    );

    fetch(`/api/posts/${postId}/${addReaction}`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        [name]: 1,
      }),
    });
  };

  return (
    <>
      {Object.entries(REACTIONS).map(([name, emoji]) => {
        return (
          <button key={name} onClick={() => {}}>
            <div className="icon">{emoji}</div>
            <div className="name">{name}</div>
          </button>
        );
      })}
    </>
  );
}
