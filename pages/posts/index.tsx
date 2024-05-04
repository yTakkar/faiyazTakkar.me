import { GetStaticProps, NextPage } from 'next'
import React from 'react'
import { IGlobalLayoutProps } from '../_app'
import { listPostInfos } from '../../lib/post'
import { IPostInfo } from '../../interface/post'
import { preparePostsPageSeo } from '../../utils/seo/post'
import NoContent from '../../components/NoContent'
import PostInfo from '../../components/post/PostInfo'

interface IProps extends IGlobalLayoutProps {
  pageData: {
    postInfos: IPostInfo[]
  }
}

const Posts: NextPage<IProps> = props => {
  const {
    pageData: { postInfos },
  } = props

  const renderContent = () => {
    if (postInfos.length === 0) {
      return <NoContent message={'No posts to show yet.'} />
    }

    return postInfos.map(postInfo => {
      return <PostInfo key={postInfo.id} postInfo={postInfo} />
    })
  }

  return (
    <div className="pt-5 lg:pt-8 lg:ml-72 w-full">
      <div className="px-5 md:px-10 pb-20">
        <div className="text-2xl lg:text-3xl font-bold text-typo-title">Posts</div>
        <div className="mt-8">{renderContent()}</div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps<IProps> = async () => {
  const postInfos = listPostInfos()
  return {
    props: {
      pageData: {
        postInfos: postInfos,
      },
      seo: preparePostsPageSeo(),
      layoutData: {},
    },
  }
}

export default Posts