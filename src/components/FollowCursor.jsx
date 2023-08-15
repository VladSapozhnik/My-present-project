import {forwardRef} from "react";


const FollowCursor = forwardRef((props, ref) => {
  return (
      <div ref={ref} className="follow-cursor"></div>
  )
})

FollowCursor.displayName = "FollowCursor";

export default FollowCursor;