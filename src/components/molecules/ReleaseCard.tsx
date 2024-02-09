import CreatorBadge from 'components/atoms/CreatorBadge'
import React from 'react'
import styles from 'styles/components/molecules/ReleaseCard.module.scss'

interface ReleaseCardProps {
    profilelink: string;
    username: string;
    name: string;
    creatorlogo: string;
}

const ReleaseCard: React.FC<ReleaseCardProps> = ({ profilelink, creatorlogo, name, username }) => {
    return (
        <div className={styles.ReleaseCard}>

            <img
                className={styles.CardBanner}
                src={creatorlogo}
                draggable="false"
            />

            <div className={styles.CardDetails}>
                <CreatorBadge color={'#000'} username={username} profilelink={profilelink} />
                <h2 className={styles.ReleaseTitle}>
                    {name}
                </h2>
            </div>

        </div>
    )
}

export default ReleaseCard
