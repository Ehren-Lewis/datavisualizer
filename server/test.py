import pandas as pd
import sys, json



def create_and_export_dataframe():

    current_df = pd.read_csv("./books_new.csv")

    new_df = current_df.sort_values(by=['Genre', 'SubGenre'])
    grouped = new_df.groupby(['Genre'])
    # print(return_dataframe);
    # sys.stdout.flush()

    class NewTree:
        def __init__(self, value) -> None:
            self.value = value
            self.children = []

        def __getitem__(self, item):
            return item

        def print_tree(self):
            for i in self.children:
                print(f"\ncurrent genre: {i.value}")
                for j in i.children:
                    print(f"\ncurrent subgenre: {j.value}")
                    for k in j.children:
                        print(k.value)

    class TreeEncoder(json.JSONEncoder):
        def default(self, o):
            return o.__dict__


    def set_pandas_options():
        pd.set_option('display.max_rows', None)
        pd.set_option('display.max_columns', None)
        pd.set_option('display.width', 400)




    def create_dataframe(link):
        return pd.read_csv(link)



    def create_tree(genres, books_grouped):
        root = NewTree("Books")
        for i in range(len(genres)):
            genre_node = NewTree(genres[i])
		# Root.children.append((firstNode))
            current_group = books_grouped[i]
            current_subgenre = current_group[1]


            split_subgenres = list(current_subgenre.groupby("SubGenre"))
            for j in range(len(split_subgenres)):

                subgenre_node = NewTree(split_subgenres[j][0])

                for k in split_subgenres[j][1:]:

                    for row in k.itertuples():

					# book_node = NewTree([row[1], row[2], row[3]], parent=subgenre_node)
                        book_node = NewTree(f"{row[1]} by {row[2]}")
                        subgenre_node.children.append(book_node)

                genre_node.children.append(subgenre_node)

            root.children.append(genre_node)
        return root


    set_pandas_options()
    current_df = create_dataframe(r'./books_new.csv')
    new_df = current_df.sort_values(by=['Genre', 'SubGenre'])

    list_of_grouped_books = list(new_df.groupby(['Genre']))
    genre_information = new_df.Genre.unique()

    current_tree = create_tree(genre_information, list_of_grouped_books)
    # current_tree.print_tree()


    # grouped = new_df.groupby(['Genre'])



    class TestTree:
        def __init__(self, value) -> None:
            self.name = value
            self.children = []
        
    # class TestEncoder(json.JSONEncoder):
    #     def default(self, o):
    #         return o.__dict__
    
    first_test = TestTree("Fred")

    first_node = TestTree("Guily")
    first_test.children.append(first_node)

    # testJson = TestEncoder().encode(first_test)
    # print(new_df.to_html())

    # testTreeBase = TestEncoder().encode(current_tree)
    testTreeBase = TreeEncoder().encode(current_tree)
    print(testTreeBase)


    sys.stdout.flush()

    


create_and_export_dataframe()

