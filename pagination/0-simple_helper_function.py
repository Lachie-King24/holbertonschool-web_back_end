def index_range(page, page_size):
    """
    Returns a tuple containing a start and end index for pagination.
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size
    
    return (start_index, end_index)