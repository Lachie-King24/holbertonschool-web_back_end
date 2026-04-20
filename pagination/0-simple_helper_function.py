#!/usr/bin/env python3
"""
Main module for pagination helper function.
"""
from typing import Tuple

def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Returns a tuple containing a start and end index for pagination.
    """
    start_index = (page - 1) * page_size
    end_index = page * page_size

    return (start_index, end_index)
