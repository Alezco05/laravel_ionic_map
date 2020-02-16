<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pqr extends Model
{
    protected $fillable = ['name', 'surname','in_type', 'in_code','problem_id','neighbor_id','address', 'issue','phone','lat','long'];
}
