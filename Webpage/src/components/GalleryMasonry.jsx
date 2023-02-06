import * as React from 'react';
import { useState, useLayoutEffect } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

function useWindowSize() {
    const [size, setSize] = useState([0, 0]);
    useLayoutEffect(() => {
        function updateSize() {
            setSize([window.innerWidth, window.innerHeight]);
        }
        window.addEventListener('resize', updateSize);
        updateSize();
        return () => window.removeEventListener('resize', updateSize);
    }, []);
    return size;
}

function ShowWindowDimensions(props) {
    const [width, height] = useWindowSize();
    return <span>Window size: {width} x {height}</span>;
}

// function debounce(fn, ms) {
//     let timer
//     return _ => {
//         clearTimeout(timer)
//         timer = setTimeout(_ => {
//             timer = null
//             fn.apply(this, arguments)
//         }, ms)
//     };
// }

// function MyComponent() {
//     const [dimensions, setDimensions] = useState({
//         height: window.innerHeight,
//         width: window.innerWidth
//     })
//     useEffect(() => {
//         const debouncedHandleResize = debounce(function handleResize() {
//             setDimensions({
//                 height: window.innerHeight,
//                 width: window.innerWidth
//             })
//         }, 1000)

//         window.addEventListener('resize', debouncedHandleResize)

//         return _ => {
//             window.removeEventListener('resize', debouncedHandleResize)

//         }
//     })
//     return <div>Rendered at {dimensions.width} x {dimensions.height}</div>
// }

// 코드 보존
const Label = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(0.5),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
}));

export default function GalleryMasonry() {
    // const [reload, setReload] = useState([]);
    // const refresh = () => { setReload({}); }

    return (
        <Box sx={{
            width: '100%',
            minWidth: 600,
            minHeight: 829,
            pt: '90px',
            display: 'flex',
            justifyContent: 'center',
            // backgroundColor: 'cyan'
        }}>
            <Masonry columns={{ xs: 2, sm: 3, md: 4, lg: 5, xl: 6 }} spacing={2}>
                {itemData.map((item, index) => (
                    <div
                        key={index}
                        style={{
                            // 고정너비형 반응형 개발중
                            // width: '236px'
                        }}>
                        <Label>{index + 1}</Label>
                        <img
                            src={`${item.img}?w=162&auto=format`}
                            srcSet={`${item.img}?w=162&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                            style={{
                                borderBottomLeftRadius: 4,
                                borderBottomRightRadius: 4,
                                display: 'block',
                                width: '100%',
                            }}
                        />
                    </div>
                ))}
            </Masonry>

            {/* 반응형 참고 */}
            {/* <Masonry columns={{ xs: 3, sm: 4 }} spacing={2}>
                    {heights.map((height, index) => (
                        <Label key={index} sx={{ height }}>
                            {index + 1}
                        </Label>
                    ))}
                </Masonry> */}
        </Box>
    );
}

const itemData = [
    {
        img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
        title: 'Fern',
    },
    {
        img: 'https://images.unsplash.com/photo-1627308595229-7830a5c91f9f',
        title: 'Snacks',
    },
    {
        img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
        title: 'Mushrooms',
    },
    {
        img: 'https://images.unsplash.com/photo-1529655683826-aba9b3e77383',
        title: 'Tower',
    },
    {
        img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
        title: 'Sea star',
    },
    {
        img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
        title: 'Honey',
    },
    {
        img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
        title: 'Basketball',
    },
    {
        img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
        title: 'Breakfast',
    },
    {
        img: 'https://images.unsplash.com/photo-1627328715728-7bcc1b5db87d',
        title: 'Tree',
    },
    {
        img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
        title: 'Burger',
    },
    {
        img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
        title: 'Camera',
    },
    {
        img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
        title: 'Coffee',
    },
    {
        img: 'https://images.unsplash.com/photo-1627000086207-76eabf23aa2e',
        title: 'Camping Car',
    },
    {
        img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
        title: 'Hats',
    },
    {
        img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
        title: 'Tomato basil',
    },
    {
        img: 'https://images.unsplash.com/photo-1627328561499-a3584d4ee4f7',
        title: 'Mountain',
    },
    {
        img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
        title: 'Bike',
    },
];