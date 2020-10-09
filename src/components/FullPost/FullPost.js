import React from "react";
import './FullPost.scss'

const FullPost = ({title, createdAt}) => {
    return (
        <div className="full-post post-item">
            <h2>{title}</h2>
            <p>
                <i>Posted on {createdAt}</i>
            </p>
            <br/>
            <p className="full-post__text">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A asperiores ipsum iure molestiae mollitia
                optio ratione reiciendis sunt. Adipisci animi aspernatur commodi doloremque dolorum maxime omnis
                repellendus suscipit? Expedita, labore.Distinctio, ea eum excepturi laboriosam laudantium odio quis
                soluta unde? Aliquam aliquid at dicta doloremque est fuga illum itaque labore laboriosam natus nostrum
                odit rerum sapiente sequi tempore vero, voluptas.A aliquid amet, atque autem culpa cumque ea eveniet
                explicabo facilis fugit ipsa iusto labore laboriosam, laborum molestias mollitia necessitatibus non
                pariatur quam quis quod ratione repellendus unde voluptas voluptatum!Ab adipisci aliquid animi
                asperiores commodi deleniti dolores dolorum error eveniet ex illum magni minus nam natus nobis quibusdam
                quis repellat rerum sapiente, sunt veniam veritatis voluptatem voluptates. Explicabo, totam?
                Adipisci ipsa minus omnis? Beatae deserunt doloremque enim esse harum ipsa iusto laboriosam sint?
                Aperiam architecto dolorem eum in officia perspiciatis porro. Doloribus dolorum mollitia odit quia
                quidem recusandae sit.
            </p>
        </div>
    )
}

export default FullPost;