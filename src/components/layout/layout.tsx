import React, { FC, useRef } from 'react'
import Header  from './header'

interface Props {
  children: React.ReactNode;
}

const Layout: FC<Props> = ({ children }) => {
  var currentdate = new Date();

  return (
    <div suppressHydrationWarning>
      <table className="w-full">
        <thead>
          <tr>
            <td>
              <div className="header-space">&nbsp;</div>
            </td>
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>
              <div className="flex flex-col justify-center w-full">
                <div className="page">
                    {children}
                </div>
              </div>
            </td>
          </tr>
        </tbody>
        <tfoot>
          <tr>
            <td>
              <div className="footer-space">&nbsp;</div>
            </td>
          </tr>
        </tfoot>
      </table>

      <div className="header">
          <Header/>
      </div>

      <div className="footer">
        <div className='h-full text-center bg-white'>Footer</div>
      </div>
    </div>
  )
}

export default Layout
