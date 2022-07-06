import type { NextPage } from "next";
import Head from "next/head";
import Paragraph from "../components/Paragraph";

const Home: NextPage = () => {
  return (
    <>
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
              <div className="flex justify-center w-full">
                <div className="page">
                  <Paragraph />
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
                  <Paragraph/>
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
        <div className="bg-slate-800 w-full h-full"> </div>
      </div>

      <div className="footer">
      </div>
    </>
  );
};

export default Home;
