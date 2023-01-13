import { Fragment } from "react";
import classes from "./Image.module.css";

const Image = () => {
    return (
        <Fragment>
            <div className={classes.title}>Customer snaps</div>
            <div>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7mYdwv1pi7xxvZEGWIuX_IFYdZLSoHvqrBA&usqp=CAU" alt="image_1" className={classes.image_1}/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNawUI6Yr69bo2kxiEAYBGYeiZdhAFMMIsEw&usqp=CAU" alt="image_2" className={classes.image_2}/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRr80BPriTQQ5LSQcz7KvsDp5ZMjpOfUMnBgw&usqp=CAU" alt="image_3" className={classes.image_3}/>
                <img src="https://nigerianfinder.com/wp-content/uploads/2021/03/Best-Indoor-Plants-in-Nigeria.jpg" alt="image_4" className={classes.image_4}/>
                <img src="https://im.idiva.com/content/2019/Sep/iDiva_Ways-To-Use-Indoor-Plants-As-Decor_Thumbnail_5d847cad866ce.jpg" alt="image_5" className={classes.image_5}/>
                <img src="https://images.unsplash.com/photo-1569350080887-dd38c27caad0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8cGxhbnQlMjBkZWNvcnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="image_6" className={classes.image_6}/>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy3qb_DNon7wif7gLvVMwVVYQQJRFOhkPOaQ&usqp=CAU" alt="image_7" className={classes.image_7}/>
                <img src="https://i.pinimg.com/236x/61/ce/f4/61cef40903fb450baaf1e75654f4ce98.jpg" alt="image_8" className={classes.image_8}/>
            </div>
        </Fragment>
    )
};

export default Image;