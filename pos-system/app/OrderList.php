<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class OrderList extends Model
{

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'order_list';


    protected $fillable = [
        'list'
    ];
}
