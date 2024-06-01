// import React, { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { itemsAction } from "../store/itemsSlice";
// import { useDispatch } from "react-redux";
// import { fetchStatusActions } from "../store/fetchStatusSlice";

// const FetchItems = () => {
//   const fetchStatus = useSelector((store) => store.fetchStatus);
//   const dispatch = useDispatch();

//   useEffect(() => {
//     if (fetchStatus.fetchDone) return;

//     const controller = new AbortController();
//     const signal = controller.signal;
//     dispatch(fetchStatusActions.markFetchingStarted());

//     fetch("http://localhost:8080/items", { signal })
//       .then((res) => res.json())
//       .then(({ items }) => {
//         dispatch(fetchStatusActions.markFetchDone());
//         dispatch(fetchStatusActions.markFetchingfinished());
//         dispatch(itemsAction.addInitialItems(items[0]));
//       });

//     return () => {
//       controller.abort();
//     };
//   }, [fetchStatus]);

//   return (
//     <div>
//       Fetch Done:{fetchStatus.fetchDone}
//       Currently Fetching:{fetchStatus.currentlyFetching}
//     </div>
//   );
// };

//  export default FetchItems;


//chatgpt
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { itemsAction } from "../store/itemsSlice";
import { fetchStatusActions } from "../store/fetchStatusSlice";

const FetchItems = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();

  useEffect(() => {
    if (fetchStatus?.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchingStarted());

    fetch("http://localhost:8080/items", { signal })
      .then((res) => res.json())
      .then(({ items }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchingFinished());
        dispatch(itemsAction.addInitialItems(items[0])); // assuming items is an array
      })
      .catch((error) => {
        console.error("Fetch error:", error);
        dispatch(fetchStatusActions.markFetchingFinished());
      });

    return () => {
      controller.abort();
    };
  }, [fetchStatus?.fetchDone, dispatch]); // Add dispatch to dependency array

  if (!fetchStatus) {
    return; // Handle case where fetchStatus might be undefined
  }

  return (<></>
  );
};

export default FetchItems;
