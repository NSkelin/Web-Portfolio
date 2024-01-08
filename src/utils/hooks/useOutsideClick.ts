import {RefObject, useEffect} from "react";

/**
 * Custom hook that collapses the specified element when the user clicks / taps outside of it.
 *
 * @param ref - The ref object that represents the element to be collapsed.
 * @param collapseFn - The function to be called when the element needs to be collapsed.
 */
export function useOutsideClick(ref: RefObject<HTMLElement>, collapseFn: () => void) {
	useEffect(() => {
		/**
		 * Event handler that collapses the element when the user clicks / taps outside of it.
		 *
		 * @param event - The event object.
		 */
		function handleClickOutside(event: MouseEvent | TouchEvent) {
			if (ref.current && !ref.current.contains(event.target as Node)) {
				collapseFn();
			}
		}

		// Bind the event listener.
		document.addEventListener("mousedown", handleClickOutside);
		document.addEventListener("touchstart", handleClickOutside);

		return () => {
			// Unbind the event listener on clean up.
			document.removeEventListener("mousedown", handleClickOutside);
			document.removeEventListener("touchstart", handleClickOutside);
		};
	}, [ref, collapseFn]);
}
