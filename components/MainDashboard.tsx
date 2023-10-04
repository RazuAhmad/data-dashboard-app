'use client'

import React from 'react'
import Box from '@mui/material/Box';
import { Grid } from '@mui/material';
import Navbar from './Navbar';
import Sidebar from './Sidebar/Sidebar';
import Image from 'next/image';



const MainDashboard = () => {
    return (
        <Box>
            <Grid container>
                <Grid item md={2}>
                    <Sidebar />
                </Grid>
                <Grid item md={10}>
                    <Navbar />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, velit unde explicabo maxime enim blanditiis vel? Nesciunt ad iusto eligendi ut ipsam eos cum, corrupti odit repellat! Iure deleniti modi nobis quidem ipsum fuga consequuntur error explicabo cupiditate, accusamus incidunt expedita minus magni quia nostrum, tempora dignissimos, odio vel quaerat officia tenetur voluptate. Placeat magnam vel neque reiciendis ipsam aut eius cumque corporis. Debitis velit aliquid perspiciatis enim, magnam, optio ullam illo maxime distinctio deleniti iste fugit aperiam fugiat. Nulla architecto dolorum fugiat. Quos vero assumenda amet blanditiis accusamus architecto commodi, totam laborum iste, officia repellat quae mollitia harum maiores, corporis voluptates aperiam impedit a eaque quaerat odio voluptatibus eveniet? Autem, facilis porro commodi ut voluptate eos error reprehenderit maiores consequatur molestiae doloribus a aperiam. Distinctio soluta accusantium in repellendus? Repudiandae consectetur ducimus laboriosam qui nisi reiciendis? Nam ea mollitia suscipit quae animi? Consequatur exercitationem quidem veniam unde sint nesciunt reiciendis quod excepturi beatae eaque, voluptates ad libero eius, odit voluptatum nam, aperiam impedit fuga? Sit maiores magnam laborum enim inventore rerum. Laborum, qui ipsam. Explicabo quidem itaque minus illum reprehenderit. Cum error saepe illum quibusdam aliquam explicabo aliquid ullam consequuntur debitis tenetur in veniam provident temporibus nesciunt ab commodi libero quos, aut totam. Vero, commodi ipsa. Quod modi aspernatur excepturi molestiae quas unde neque delectus sapiente ducimus commodi tempora, provident natus minus inventore at iusto consectetur enim laudantium maxime nisi sunt iure? Dolorum odit pariatur, impedit autem minus cupiditate optio possimus placeat dignissimos excepturi adipisci, aperiam similique molestias? Excepturi dolore tempora veniam atque aperiam quo voluptatem veritatis illum quisquam debitis recusandae odit officiis, animi facere fuga? Iusto consequatur unde perspiciatis necessitatibus eius praesentium numquam tempore! Culpa, delectus unde quo nam soluta corrupti quia, tenetur voluptates pariatur optio, cumque iusto corporis nisi cum ducimus numquam officia est voluptatem. Laborum deleniti aliquam magni amet cum repudiandae iusto repellendus sit perferendis! Doloremque doloribus in exercitationem, omnis consectetur rerum, tenetur quibusdam debitis minima nulla non ducimus eligendi quos voluptatum? Magni itaque quidem quae expedita doloribus dolor nemo aut saepe adipisci sequi inventore laudantium possimus exercitationem consequuntur, blanditiis reprehenderit esse ullam iusto hic? Quod labore corporis quae, nam aliquid laboriosam? Accusantium similique assumenda perspiciatis omnis veritatis dolorem aut in harum quis recusandae fugiat magni sapiente eum aliquid iure mollitia odio aliquam sint a sed, beatae, soluta sit voluptates? Accusantium maxime exercitationem amet sapiente eius voluptatibus odio a dolores nostrum natus illum ullam dolorum aperiam itaque perspiciatis cum eveniet, dolore consequuntur, ratione deleniti totam explicabo necessitatibus? Voluptatibus consequatur totam consequuntur rem quod, debitis atque excepturi ducimus beatae nemo doloribus rerum expedita dolorem magnam minima perspiciatis nesciunt aliquam architecto odio nostrum? Voluptas atque nulla sapiente eaque blanditiis, exercitationem neque quasi dignissimos, illo, natus reprehenderit excepturi! Dicta in beatae alias blanditiis ipsum delectus voluptatum pariatur neque ex consequuntur officia a, commodi excepturi facere tempora provident aliquam recusandae. Repudiandae expedita mollitia omnis beatae earum possimus maxime ab quia ipsam nam voluptatibus, sit eos fugiat tenetur iure eligendi ea error ex temporibus dolor molestiae iste quisquam officiis! Dolorum, sint!</p>
                </Grid>
            </Grid>
        </Box>
    )
}

export default MainDashboard