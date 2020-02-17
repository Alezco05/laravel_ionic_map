<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Pqr extends Model
{
    protected $fillable = ['name', 'surname','infrastructure_id', 'in_code','problem_id','neighbor_id','address', 'issue','phone','lat','long'];
}
