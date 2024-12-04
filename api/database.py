import psycopg2


# get_query = "SELECT  * FROM blockchain;"
# insert_query = """
# INSERT INTO netflixlogin(email,password)
# VALUES (%s,%s)"""
# data = ("ayeleru1234@gmail.com","Oluwaseun123")
def insert_data(email,password):
    db_params = {
        "dbname": "postgres",
        "user": "postgres",
        "password": "Oluwaseun123",
        "host": "localhost",  # or the database server IP
        "port": "5432"        # default port
    }
    insert_query = """
            INSERT INTO netflixlogin(email,password)
            VALUES (%s,%s)"""
    data = (email,password)
    try:
        # Connect to the PostgreSQL server
        conn = psycopg2.connect(**db_params)
        cursor = conn.cursor()

        # Fetch current database and username
        cursor.execute(insert_query,data)
        #results = cursor.fetchall()
        conn.commit()
        print("Data Added successfully")

        # Close the connection
        cursor.close()
        conn.close()
    except Exception as e:
        print(f"An error occured at {e}")
def get_all_data():
    db_params = {
        "dbname": "postgres",
        "user": "postgres",
        "password": "Oluwaseun123",
        "host": "localhost",  # or the database server IP
        "port": "5432"        # default port
    }
    get_query = "SELECT email FROM netflixlogin;"
    try:
        # Connect to the PostgreSQL server
        conn = psycopg2.connect(**db_params)
        cursor = conn.cursor()

        # Fetch current database and username
        cursor.execute(get_query)
        results = cursor.fetchall()
        new_list = [x[0] for x in results]
        print("Data retrieved Succesfully")

        # Close the connection
        cursor.close()
        conn.close()
        return new_list
    except Exception as e:
        print(f"An error occured at {e}")

# try:
#     # Connect to the PostgreSQL server
#     conn = psycopg2.connect(**db_params)
#     cursor = conn.cursor()

#     # Fetch current database and username
#     cursor.execute(insert_query,data)
#     #results = cursor.fetchall()
#     conn.commit()
#     print("Data Added successfully")

#     # Close the connection
#     cursor.close()
#     conn.close()
# except Exception as e:
#     print(f"An error occurred: {e}")