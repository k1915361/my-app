import { Component } from 'solid-js';
import { HTMLElementEvent } from '../../@types/alltypes';
import { throttle } from '../lib/helpers';

interface Props {
    className?: string;
    children: any;
    ref: (el: HTMLDivElement) => HTMLDivElement;
    onScroll?: (e: HTMLElementEvent<HTMLDivElement>) => void;
    onScrollEnd?: () => void;
}

const ScrollContainer: Component<Props> = (props) => {
    const handleScroll = throttle((e) => {
        const { onScroll, onScrollEnd } = props;

        if (onScroll) onScroll(e);

        if (onScrollEnd) {
            const {
                currentTarget: { scrollTop, scrollHeight, offsetHeight }
            } = e;

            if (scrollTop >= scrollHeight - offsetHeight) {
                onScrollEnd();
            }
        }
    }, 10);

    return (
        <div
            ref={props.ref}
            class="ScrollContainer"
            classList={{ ...(props.className && { [props.className]: true }) }}
            onScroll={handleScroll}
        >
            <div class="ScrollContainer__Inner">{props.children}</div>
        </div>
    );
};

export default ScrollContainer;