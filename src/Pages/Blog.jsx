import { Helmet } from "react-helmet-async";

const Blog = () => {
  return (
    <div>
      <Helmet>
        <title>FH Cafe | Blog</title>
      </Helmet>
      <div className="max-w-5xl mx-auto my-20 font-ptserif space-y-10">
        <div>
          <h2 className="font-lobster text-3xl font-medium">
            1. What is One way data binding?
          </h2>
          <p className="text-lg mt-2">
            <span className="font-semibold">Ans:</span> One way data binding is
            actually the flow of data from one way to another, either from
            parent to children or children to parent. Most of the case, the data
            flows from the data source to the tag or component.
          </p>
        </div>
        <div>
          <h2 className="font-lobster text-3xl font-medium">
            2. What is NPM in node.js?
          </h2>
          <p className="text-lg mt-2">
            <span className="font-semibold">Ans:</span> NPM is the short form of
            &quot;Node Package Manager&quot; and it is the default package
            manager for NodeJS. With NPM we can add dependencies, libraries, and
            packages in our NodeJS project.
          </p>
        </div>
        <div>
          <h2 className="font-lobster text-3xl font-medium">
            3. Difference between Mongodb database vs mySQL database.
          </h2>
          <p className="text-lg mt-2">
            <span className="font-semibold">Ans:</span> MongoDB is a no-sql
            database and mySQL is an SQL database. In MongoDB, each data is
            stored as a document. In mySQL, each data is stored as a row in the
            table. MongoDB is more flexible than mySQL.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
