#!/usr/bin/env python3
"""
Main module for pagination helper function.
"""
from typing import Tuple

def index_range(page: int, page_size: int) -> Tuple[int, int]:
    """
    Returns a tuple containing a start and end index for pagination.
    """
    start = (page - 1) * page_size
    end = page * page_size

    return (start, end)
