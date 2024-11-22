import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useAppSelector } from "../../Store/Store"
import Suggested from "./Suggested"
import { faEllipsis } from "@fortawesome/free-solid-svg-icons"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import '../../../node_modules/swiper/swiper.css';
import '../../../node_modules/swiper/modules/pagination.css';
import '../../../node_modules/swiper/modules/navigation.css';
import "./suggested.css"
const SuggestedContainer = () => {
    const loginnedUser = useAppSelector(state => state.User.loginnedUser)
    const users = useAppSelector(state => state.User.users)

    // Users With loginnedUser
    const notUser = users.filter(user => user.id != loginnedUser.id)

    const suggested = notUser.filter(notUser => {
        let isFriend = false
        loginnedUser.friends.map(friend => {
            if (friend == notUser.id) isFriend = true
        })
        if (!isFriend) return notUser
    })
    return (
        <div className="my-card">
            <div className="suggest-head d-flex mb-2">
                <span>People you may know</span>
                <div className="suggest-icon pointer">
                    <FontAwesomeIcon icon={faEllipsis}></FontAwesomeIcon>
                </div>
            </div>
            <Swiper
                spaceBetween={5}
                slidesPerView={2.5}
                modules={[Navigation]}
                navigation
            >
                {
                    suggested.length > 0 &&
                    suggested.map(e => <SwiperSlide className="card" key={e.id}><Suggested user={e} /></SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}

export default SuggestedContainer
